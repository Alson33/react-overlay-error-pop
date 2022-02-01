
interface messageObject {
    message: String | object,
    type: 'error' | 'warning',
    delay?: number
}

export type messageArrayObject = messageObject[] | []