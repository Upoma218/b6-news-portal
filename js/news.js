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
        console.log(categoryList)
    }
}

const displayNewsDetails = document.getElementById('news-card');
const newsDiv = document.createElement('div');
newsDiv.classList.add('row g-0');
newsDiv.innerHTML = `
<div class="col-md-4">
<img src="..." class="img-fluid rounded p-3" alt="...">
</div>
<div class="col-md-8">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
</div>
</div>
`;
displayNewsDetails.appendChild(newsDiv);


setAllMenu();


