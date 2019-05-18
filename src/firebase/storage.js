import Firebase from './config'

const storage = Firebase.storage()

const uploadImageNew = (file) => {
    const ref = storage.ref(`web-news/`).child(file.name)
    return ref.put(file)
}

export {
    uploadImageNew
}