


export default async function Notes({params}){
 const {id} = await params
return(
    <div className="text-center mt-56 text-fuchsia-400">
        <h1>Note</h1>
        <h2>{id}</h2>
    </div>
)

}