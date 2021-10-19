function ArticalListByCategory({articles,category}){
    return(
        <> <h1>Showing news for category <i>{category}</i>        </h1>
        {
            articles.map(article=>{
                return(
                    <div key={article.id}>
                        <h2>{article.id}:{article.title}</h2>
                        <p>{article.description}</p>

                    </div>
                )
            })
        }
         </>
    )

}
export default ArticalListByCategory
export async function getServerSideProps(context){
    const {params, req,res,query} =context
    console.log(`query`, query)
    const {category} =params
    const response=await fetch(`http://localhost:4000/news?category=${category}`)
    console.log(`category`, category)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie',['name=Lokesh'])

    const data =await response.json()
    return{
        props:{
            articles:data,
            category
        }
    }
}