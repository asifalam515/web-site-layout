// fetch data
const loadNews=()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(data=>displayNews(data.data.news_category))
}

const displayNews=(categories)=>{
    const categoriesDiv=document.getElementById('categories')

 categories.forEach(category=>{
    // console.log(category.category_name);
    const categoryDiv=document.createElement('div')
    categoryDiv.innerHTML=`
    <button type="button" class="btn btn-primary">${category.category_name}</button>
    `
  

    categoriesDiv.appendChild(categoryDiv)

 })


}



loadNews()