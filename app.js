const searchNames = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayNames(data.meals))
}

const displayNames = names =>{
    const mealContainer = document.getElementById('meal-container');
    

    names.forEach(name => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-result row align-items-center my-3 p-3';


        mealDiv.innerHTML =  `
                <div class="col-md-9">
                    <img onclick="displayMealDetail('${name.strMeal}')" id="image" src="${name.strMealThumb}">
                    <h3 class="name">${name.strMeal}</h3>
                    <p class="author lead"> <span></span></p>
                </div>
                <div class="col-md-3 text-md-right text-center">
                    
                </div>
        `;
        mealContainer.appendChild(mealDiv);
    });
}

const displayMealDetail = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals[0]));
}

const renderMealInfo = name => {
    const mealDiv = document.getElementById('meal-detail');
    mealDiv.innerHTML =  `
    <img id="show-image" src="${name.strMealThumb}">
    <h1>${name.strMeal}</h1>
    <h3>Ingredients:</h3>
    <p>1. ${name.strIngredient1}</p>
    <p>2. ${name.strIngredient2}</p>
    <p>3. ${name.strIngredient3}</p>
    <p>4. ${name.strIngredient4}</p>
    <p>5. ${name.strIngredient5}</p>
    <p>6. ${name.strIngredient6}</p>
    <p>7. ${name.strIngredient7}</p>
    `;
}







