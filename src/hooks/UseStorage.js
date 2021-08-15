import { useEffect  , useState} from "react"

import { projectFireStore, projectStorage } from '../component/Firebase/config'

const  useStorage =(file)=>{
    const [progress , setProgress]= useState(0)
    const [url , setUrl]= useState(null)
    const [err , setErr]= useState(null)
    

    useEffect(()=>{
        const storagetRef = projectStorage.ref(file.name)
        const collectionRef = projectFireStore.collection('profile_image')
        storagetRef.put(file).on(('state_changed', (snap)=>{
           let percentage=  (snap.bytesTransferred / snap.totalBytes) * 100;
           setProgress(percentage)
        } ,(err)=>{
            setErr(err)

        } , async ()=>{
            const url = await storagetRef.getDownloadURL()
            const createdAt = timestamp();
            await collectionRef.add({ url, createdAt });
            setUrl(url); 
        }),[file])
    })
    return {progress , url , err}
}
export default useStorage