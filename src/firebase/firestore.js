import Firebase from './config'
// fix: FileValue.arrayUnion() necesita este import para funcionar
import * as firebase from 'firebase/app'

const firestore = Firebase.firestore();

async function adminLogin(user) {
    const ref = await firestore.collection('admin').doc(user.email).get()

    if (ref.data().email === user.email && ref.data().password == user.password) {
        return true
    } else {
        return alert("Usuario o contraseña incorrectos")
    }
}

async function getNews() {
    var webNews = []
    const ref = firestore.collection('web-news')
    await ref.get()
        .then((items) => {
            items.forEach((item) => {
                var data = {
                    ...item.data(),
                    id: item.id
                }
                webNews.push(data)
            })
        })
        return(webNews)
}

async function createNew(data) {
    await firestore.collection(`web-news`).doc().set(data).then(
        () => {
            console.log(data)
        }
    ).catch((err)=>{console.log(err)})
}

async function deleteNew(id) {
    return await firestore.collection(`web-news`).doc(id).delete()
        .catch( (err) => console.log(err)  )
}

async function createMember(data) {
    data = {
        ...data,
        ultimoPago: []
    }

    const memberExist =  await firestore.collection("members").doc(data.cuit).get()
    
    if (memberExist.exists) {
        return alert("Ya existe un miembro con este cuit")
    } else {
        await firestore.collection(`members`).doc(data.cuit).set(data).then(
            () => {
                console.log("miembro creado: ", data)
            }
        ).catch((err)=>{console.log(err)})
    }
}

async function getMembers() {
    var members = []
    const ref = firestore.collection('members')
    await ref.get()
        .then((items) => {
            items.forEach((item) => {
                var data = {
                    ...item.data(),
                    id: item.id
                }
                members.push(data)
            })
        })
    return (members)
}

async function setLastPayment(cuit) {
    var query = firestore.collection(`members`)
    query.where("cuit","==", cuit).get()
        .then(
            (queryResult) => {
                var ref = queryResult.docs[0].ref;
                var timeStamp = firebase.firestore.Timestamp.now()
                console.log(timeStamp)
                ref.update({
                    ultimoPago: firebase.firestore.FieldValue.arrayUnion(timeStamp),
                })
                .then(
                    () => {
                        window.alert("Pago registrado correctamente!")
                        window.location.reload(true)
                    }
                )
                console.log("doc:", queryResult.docs[0].data())
            }
        )
}
async function deletePayment(cuit, item) {
    var query = firestore.collection(`members`)
    query.where("cuit","==", cuit).get()
        .then(
            (queryResult) => {
                var ref = queryResult.docs[0].ref;
                ref.update({
                    ultimoPago: firebase.firestore.FieldValue.arrayRemove(item),
                })
                .then(
                    () => {
                        window.alert("Pago eliminado correctamente!")
                        window.location.reload(true)
                    }
                )
                // console.log("doc:", queryResult.docs[0].data())
            }
        )
}



export {
    adminLogin,
    createNew,
    getNews,
    deleteNew,
    createMember,
    getMembers,
    setLastPayment,
    deletePayment
}