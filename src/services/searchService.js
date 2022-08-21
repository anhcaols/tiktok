import * as requestSearch from '~/utils/httpRequest'

export const search = async (q, type = 'less') => {
    try {
        const res = await requestSearch.get('users/search', {
            params: {
                q,
                type,
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
