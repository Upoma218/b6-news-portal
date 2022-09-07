const loadCategories = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    const allData = data.data.news_category;
    return allData;
    ;

}

const setAllMenu = async() =>{
    const allData = await loadCategories();
    const categoryList = document.getElementById('categories-container');
    // console.log(allData)
    for(const category of allData){
        
        const li = document.createElement('li');
        li.innerHTML = `
        <a class="nav-link active me-3 ms-2 fw-semibold text-secondary" aria-current="page" href="#">${category.category_name}</a>
        `;
        categoryList.appendChild(li);
    }
}

const newsCategories = async(_id) => {
const url = `https://openapi.programming-hero.com/api/news/$`
    const res = await fetch(url);
    const data = await res.json();
    const allNewsData = data;
    console.log(allNewsData)
    return allNewsData;
    ;
    
}
newsCategories();





setAllMenu();


