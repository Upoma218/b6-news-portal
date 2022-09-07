const loadCategories = async() => {
    try{
        toggleSpinner(true);
        const url = `https://openapi.programming-hero.com/api/news/categories`;
        let data = {};
        const res = await fetch(url);
        data = await res.json();
        const allData = data.data.news_category;
        // console.log(allData)
        setAllMenu(allData);
    }
    catch(error){
        console.log(error)
    }

}

const setAllMenu = (allData) =>{
    const categoryList = document.getElementById('categories-container');
    // console.log(allData)
    for(const category of allData){
        // console.log(category);
        const li = document.createElement('li');
        li.innerHTML = `
        <a onclick = "newsCategories('${category.category_id
        }','${category.category_name}')" class="nav-link active mx-3 fw-semibold text-secondary" aria-current="page" href="#">${category.category_name}</a>
        `;
        categoryList.appendChild(li); 
    }
    toggleSpinner(false);
}

const newsCategories = async(_id = '08',name = 'All News') => {
    // console.log(_id)
    toggleSpinner(true);
try{
    const url = `https://openapi.programming-hero.com/api/news/category/${_id}`
    let data = {};
    const res = await fetch(url);
    data = await res.json();
    // console.log(data)
    
    setNews(data.data,name);
}
catch(error){
    console.log(error);
}

    
    
}
// newsCategories();
const modalShow = (news) =>{
    const modalContainer = document.getElementById('news-info');
    modalContainer.innerHTML = ``;
    modalContainer.innerHTML = `
    
    <h5 class="modal-title text-info text-center" id="exampleModalLabel">${news.title
    }</h5>
    <p class="card-text text-secondary text-sm">${news.details}</p>
    <img src="${news.image_url}" class="img-fluid" alt="..." >
       <h6 >View: ${news.total_view ? news.total_view : 'No view found'}</h6>
        <img src="${news.author.img}" class="img-fluid w-50 mx-auto" alt="..." >
        <div><h6 >Name: ${news.author.name ? news.author.name : 'No name found'}</h6>
        <h6 class = "fs-6">Publish Date: ${news.author.published_date ? news.author. published_date : 'No release date found'}</h6></div>
`
toggleSpinner(false);
}
// console.log(displayNewsDetails)
const modalInfo = async(id) =>{
    
    try{
        toggleSpinner(true);
        const url = `https://openapi.programming-hero.com/api/news/${id}`;
        let data = {};
        const res = await fetch(url);
        data = await res.json();
        console.log(data)
        const news = data.data[0];
        modalShow(news);
      
    }
    catch(error){
        console.log(error)
    }
    

}


const setNews = (allNewsData, name) =>{
    const displayNewsDetails = document.getElementById('news-card');
    displayNewsDetails.innerHTML = '';
    const newsNumber = document.getElementById('news-number');
    newsNumber.innerHTML = `
    ${allNewsData.length} news found for category ${name}`
    
    allNewsData.sort((a, b) => (a.total_view < b.total_view) ? 1 : -1)
    for(const category of allNewsData){
       /*  const newsNumber = data.length; 
           if(newsNumber > 0){
              return newsNumber + 'News found in the Category'
            }
           else{
             return 'No News found in the Category'
           }  */
        // console.log(category);
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="row g-0 my-3 border border-3 rounded p-3">
             <div class="col-md-5">
                <img src="${category.image_url

                }" class="img-fluid rounded pe-4" alt="...">
             </div>
             <div class="col-md-7 ">
                <div class="card-body">
                   <div><h5 class="card-title fw-bold">${category.title
                   }</h5>
                   <p class="card-text text-secondary text-sm mt-4">${category.details.slice(0,250) + ' . . .'}</p>
                   </div>
                 
                  <div class="mt-3 d-flex justify-content-between align-items-center">
                          <div class="d-flex">
                             <img src="${category.author.img}" class=" author-image img-fluid rounded-circle " alt="...">
                             <div class ="ms-2">
                               <h6 >${category.author.name ? category.author.name : 'No name found'}</h6>
                               <h6 class = "text-secondary fs-6">${category.author.published_date ? category.author.published_date : 'No release date found'}</h6>
                            </div>
                          </div> 
                            <h6 > ${category.total_view ? category.total_view : 'No view found'}</h6>
                        <!-- Button trigger modal -->
                        <a class="link-primary" href="" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = "modalInfo('${category._id}')">Show details</a>

                        <!-- Modal -->
                 
                  </div>
                </div>
             </div>
           </div>

    `;
    displayNewsDetails.appendChild(newDiv);
    }
    toggleSpinner(false);
}

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
}

loadCategories()
newsCategories()



