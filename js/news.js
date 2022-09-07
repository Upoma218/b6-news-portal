const loadCategories = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    
    const res = await fetch(url);
    const data = await res.json();
    const allData = data.data.news_category;
    // console.log(allData)
    setAllMenu(allData);
    ;

}

const setAllMenu = (allData) =>{
    const categoryList = document.getElementById('categories-container');
    // console.log(allData)
    for(const category of allData){
        // console.log(category);
        const li = document.createElement('li');
        li.innerHTML = `
        <a onclick = "newsCategories('${category.category_id
        }')" class="nav-link active mx-3 fw-semibold text-secondary" aria-current="page" href="#">${category.category_name}</a>
        `;
        categoryList.appendChild(li);

        
    }
}

const newsCategories = async(_id) => {
    // console.log(_id)
const url = `https://openapi.programming-hero.com/api/news/category/${_id}`

    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    
    setNews(data.data);
    
    
}
// newsCategories();

// console.log(displayNewsDetails)

const setNews = (allNewsData) =>{
    const displayNewsDetails = document.getElementById('news-card');
    for(const category of allNewsData){
       /*  const newsNumber = category.length; 
           if(newsNumber > 0){
              return newsNumber + 'News found in the Category'
            }
           else{
             return 'No News found in the Category'
           }  */
        // console.log(category);
        displayNewsDetails.innerHTML = `
        <div class="row g-0">
             <div class="col-md-5">
                <img src="${category.image_url

                }" class="img-fluid rounded p-3" alt="...">
             </div>
             <div class="col-md-7">
                <div class="card-body">
                   <div><h5 class="card-title fw-bold">${category.title
                   }</h5>
                   <p class="card-text text-secondary text-sm">${category.details.slice(0,250) + ' . . .'}</p>
                   </div>
                 
                  <div class="mt-3 d-flex justify-content-between align-items-center">
                            <div class = "w-25">
                               <img src="${category.author.img}" class="img-fluid w-25 rounded-circle me-3" alt="..." >
                            </div>
                            <div >
                               <h6 >${category.author ? category.author.name : 'No release date found'}</h6>
                               <h6 class = "text-secondary fs-6">${category.author ? category.author. published_date : 'No release date found'}</h6>
                            </div>
                            <h6 > ${category.total_view ? category.total_view : 'No release date found'}</h6>
                        <!-- Button trigger modal -->
                        <a class="link-primary w-25" href="" data-bs-toggle="modal" data-bs-target="#exampleModal">Show details</a>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                         <div class="modal-dialog">
                           <div class="modal-content">
                             <div class="modal-header">
                               <h5 class="modal-title text-info text-center" id="exampleModalLabel">${category.title
                               }</h5>
                               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                             </div>
                             <div class="modal-body">
                             <img src="${category.author.img}" class="img-fluid" alt="..." >
                             <h6 >Name: ${category.author ? category.author.name : 'No release date found'}</h6>
                             <h6 class = "fs-6">Publish Date: ${category.author ? category.author. published_date : 'No release date found'}</h6>
                             <h6 >View: ${category.total_view ? category.total_view : 'No release date found'}</h6>
                             <p class="card-text text-secondary text-sm">${category.details}</p>
                             <img src="${category.image_url

                             }" class="img-fluid" alt="..." >
                             </div>
                             <div class="modal-footer">
                               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                             </div>
                           </div>
                         </div>
                     </div>
                  </div>
                </div>
             </div>
           </div>

    `;
    }
   
}



loadCategories()


