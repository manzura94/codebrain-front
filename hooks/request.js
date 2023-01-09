import { useEffect, useState } from "react";
import { authHost } from "../utils/https";

export function usePostRequest(options = {}) {
	return useRequest({ method: 'POST', ...options })
}

export function useGetRequest(options = {}) {
	return useRequest({ method: 'GET', ...options })
}

export function useRequest(options = {}) {
	const [response, setResponse] = useState()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState({})

	async function request(overrideOptions = {}, sync = false) {
		console.log({...overrideOptions});
		setLoading(true)
		try {
			const { data } = await authHost({
				...options,
				...overrideOptions
			})
			if (!sync) setResponse(data)
			return { response: data, success: true }
		} catch (e) {
			console.log(JSON.stringify(e), 'error')
			setError(e.response || {})
			if (e.response === undefined) {
				alert('Проверьте интернет соединение')
			} else if (e.response.status >= 500) {
				alert('Ошибка сервера.')
			}

			return { error: e.response, success: false }
		} finally {
			if (!sync) setLoading(false)
		}
	}

	return {
		loading,
		request,
		error,
		response,
		setResponse,
		setError,
		setLoading,
	}
}

export function useLoad(options, dependencies = []) {
	const request = useRequest({ method: 'GET', ...options })
	useEffect(() => {
		request.request()		
	}, dependencies)

	return request
}