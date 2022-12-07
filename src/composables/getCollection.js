import { projectFirestore } from "@/firebase/config"
import { ref } from "vue"

const getCollection  = (collection) => {
    const docs = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

    collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        docs.value = results
        error.value = null
    }, (err) => {
        console.log(err.message);
        docs.value = nullerror.value = 'could not fetch data'
    })

    return { docs, error }

}

export default getCollection