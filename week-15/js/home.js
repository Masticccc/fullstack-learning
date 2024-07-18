fetch('https://api.jikan.moe/v4/top/anime')
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);
    const data = result.data;

    let list = document.querySelector('[data-component="list"]');
    let allnewContent = '';

    //Use result.data we just load to create the UI for list
    // result.data is array, so need to loop through
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      //put dummy content into list, so new details will be add later
      //create newContent to hold all new content
      let newContent = `
       <div class="col-6 col-md-3 mb-5 text-center" title="${item.title_english}">
         <a href="details.html?id=${item.mal_id}" class="link-primary d-block position-relative text-decoration-none" data-component="item">
           <span class="position-absolute badge bg-danger top-0 end-0">
               <i class="bi bi-star-fill"></i> ${item.score}
           </span>
           <span class="d-flex flex-column justify-content-center">
               <img class="rounded shadow" src="${item.images.jpg.large_image_url}" data-component="image" />
               <span class="text-dark mt-2" data-component="title">${item.title_english}</span>
           </span>
         </a>
       </div>`;

      allnewContent = allnewContent + newContent;
    }

    list.innerHTML = allnewContent;
  });
