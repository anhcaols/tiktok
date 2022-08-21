import { useEffect, useState, useRef } from 'react'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import { Wrapper as WrapperPopper } from '~/components/Popper'
import { AccountItem } from '~/components/AccountItem'
import styles from './Search.module.scss'
import { SearchIcon, ClearSearch, LoadingSearch } from '~/components/Icons/icon'
import { useDebounce } from '~/hooks'
import * as searchService from '~/services/searchService'
const cx = classNames.bind(styles)
function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()

    const debounced = useDebounce(searchValue, 500)
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return
        }
        setLoading(true)
        const fetchApi = async () => {
            try {
                setLoading(true)
                const result = await searchService.search(debounced, 'less')
                setSearchResult(result)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchApi()
    }, [debounced])
    // Event
    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
        setSearchResult([])
    }
    const handleOnchange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }
    return (
        <div>
            <HeadlessTippy
                appendTo={() => document.body}
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <WrapperPopper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </WrapperPopper>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleOnchange}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <ClearSearch />
                        </button>
                    )}
                    {loading && (
                        <button className={cx('loading')}>
                            <LoadingSearch />
                        </button>
                    )}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    )
}

export default Search
