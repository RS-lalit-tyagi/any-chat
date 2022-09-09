import { createContext, useContext, useMemo, useState } from 'react'

const chatContext = createContext({})

const { Provider, Consumer } = chatContext
const ChartProvider = () => {
	const [messages, setMessages] = useState([
		{
			message: 'hello',
			read: true,
			sendBy: true,
		},
		{
			message: 'hi',
			read: false,
			sendBy: false,
		},
		{
			message: 'hello',
			read: true,
			sendBy: false,
		},
		{
			message: 'hi',
			read: false,
			sendBy: true,
		},
	])
	const providerValues = useMemo(
		() => ({
			messages,
			setMessages,
		}),
		[messages]
	)
	return <Provider value={providerValues}></Provider>
}

export const useChat = () => useContext(chatContext)
export { ChartProvider, Consumer as ChatConsumer, chatContext }
