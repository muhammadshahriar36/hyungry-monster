fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(response => response.json())
.then(data => displayMeals(data[0]));

const displayMeals = meals =>{
    for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    console.log(meal.strCategory)

    }
}




// function displayMeals(meals){
//     // const mealNames = meals.map(meal => meal.strCategory);
//     var mealNames = JSON.parse('{"meal.strCategor"}');
//     console.log(mealNames);
// }






// function displayMeals(meals){
//     const mealName = meals.map(meal => meal.strCategory);
//     const ul 
// }







// const displayMeals = meals =>{
//     for (let i = 0; i < meals.length; i++) {
//     const meal = meals[i];
//     console.log(meal)

//     }
// }






















// const displayMeals = data.meals;
//     for (let i = 0; i < displayMeals.length; i++) {
//     const element = displayMeals[i];
//     console.log(element.strCategory);
//     }



// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
// .then(response => response.json())
// .then(data => {

//     for (let i = 0; i < meals.length; i++) {
//     const meal = meals[i];
//     console.log(data.strCategory)
//     }
// }





// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
// .then(response => response.json())
// .then(data => displayMeals(data.meals));

// const displayMeals = meals =>{
//     const mealsDiv = document.getElementById('meals');
//     meals.forEach(meal => {
//         const mealDiv = document.createElement('div')
//         mealDiv.className = `country`;

//         const mealInfo = `
//         <h3 class="country-name">${country.strCategory}</h3>
//         <p>${country.strCategoryDescription}</p>
//         `;
//         mealDiv.innerHTML = mealInfo;

//         mealsDiv.appendChild(mealDiv);

//     });
// }














// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
// .then(res => res.json())
// .then(data => displayMeal(data));


// const displayMeal = meals => {
//     const mealsDiv = document.getElementById('meals')l;
//     for (let i = 0; i < meals.length; i++) {
//         const meal = meals[i];
//         const mealDiv = document.createElement('div');
        
//         const mealInfo = `
//         <h3>Bangladesh</h3>
//         <p>Dhaka</p>
//         `

//         mealDiv.innerHTML = mealInfo;

//         mealsDiv.appendChild(countryDiv);
//     }
// }





// fetch('https://restcountries.eu/rest/v2/all')
// .then(res => res.json())
// .then(data => displayCountries(data));

// const displayCountries = meals =>{
//     const countriesDiv = document.getElementById('meals');
//     for (let i = 0; i < meals.length; i++) {
//         const country = meals[i];
//         const countryDiv = document.createElement('div');
        
//         // const h3 = document.createElement('h3');
//         // h3.innerText = country.name;
//         // countryDiv.appendChild(h3);

//         // const p = document.createElement('p');
//         // p.innerText = country.capital;
//         // countryDiv.appendChild(p);

//         const countryInfo = `
//         <h3>${country.strCategory}</h3>
//         <p>${country.strCategoryDescription}</p>
//         `
//         countryDiv.innerHTML = countryInfo;

//         countriesDiv.appendChild(countryDiv);
      
//     }
    
// }


















