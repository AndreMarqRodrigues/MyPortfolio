<template>
    <body>
        <main>
            <header>
                <h1>Welcome to my portfolio</h1>
            </header>
            <section class="first-Project">
                <h2>Stroke Prediction</h2>
                <h3>Machine Learning</h3>
                <p>     I undertook a machine learning project focused on predicting the likelihood of stroke occurrence in individuals. With a database comprising 5,000 entries, I applied various machine learning algorithms to achieve accurate predictions. The project provided me with a comprehensive understanding of machine learning concepts, Python programming, and essential libraries such as NumPy, Pandas, scikit-learn, and Seaborn.

Throughout the project, I implemented 15 diverse machine learning algorithms, encompassing classifiers, support vector machines (SVMs), and other relevant techniques. Employing random forest classifier, K-nearest neighbours classifier, and decision tree classifier, I achieved the highest performance. Notably, the random forest classifier exhibited an accuracy of 89%, emerging as the most effective algorithm for stroke prediction.

 While I did not explicitly mention feature selection or engineering techniques, I effectively analysed the dataset and identified the most influential variables for accurate predictions. By validating the performance and accuracy of the models, I ensured reliable outcomes.

  The entire project was executed using Jupiter Notebook, providing a structured and well-documented workflow. The experience enhanced my skills in data processing, pre-processing, and model evaluation. It also deepened my understanding of machine learning algorithms and their applications for real-world problems.</p>
            <img src="../assets/StrokePredictionVideo.png">
            </section>

            <section class="second-Project">
                <h2>Karen</h2>
                <h3>Gaming ChatBot</h3>
                <p>Karen is a Chatbot programmed to have a conversation with the user about gaming in general. From answering user’s questions to naming the most played games to date. We worked on lists of key words that Karen would recognize, process and generate an appropriate response. Karen has also function implemented on its’ code that allows the bot to work with APIs and RSS to get up to date information automatically.

This was my first programming project and in my opinion was a great introduction to the field. I developed skills with python, learned how to use GitHub and also developed my teamwork skills.</p>
                <img src="../assets/KarenFlow.jpg">
            </section>

            <section class="third-Project">
                <h2>Gaming Forum</h2>
                <h3>Web Api</h3>
                <p>I developed a RESTful API project individually as part of a university module to enhance my skills in web APIs, KOA framework, and REST principles. Using KOA, REST, and JavaScript, I created user-facing endpoints for account creation, updates, and game-related actions such as reviewing and rating games. As an admin, I implemented functionalities to manage games, ratings, reviews, and user accounts. The API integrated two third-party APIs: "Trivia Questions" for random video game trivia questions and "Cheap shark" to retrieve game names and best prices. I utilized MySQL for data storage and Thunder client for testing. The project showcased my proficiency in JavaScript, API development, integration of third-party services, and database management.

Overall, I gained valuable experience in building a RESTful API, implementing user and admin features, and ensuring seamless functionality.</p>
            </section>

            <section class="forth-Project">
                <h2>This Portfolio!</h2>
                <h3>My first project after university</h3>
                <p>This portfolio was made with VueJS and threeJS. This was my first project after university and I decided to learn something that looked interesting. For the contact page I used MailJS for the fist time aswell. Hope you enjoyed it!</p>
            </section>

        </main>
    </body>
</template>

<script>
export default{

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Coda&family=Poppins&family=Staatliches&display=swap');


main {
  width: 100vw;
  color: #fffcf2;
  /* z-index: 99; */
  position: absolute;
  width: 100%;
  margin: 0px auto;
  padding: 120px 0px;
  height: calc(100vh - 248px);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
    
header {
    background: var(--dark-bg);
    grid-column: 1 / span 12;
    color: #fffcf2;
    font-size: 3.5rem;
    font-family: 'bebas neue';
    padding-left: 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing);
  }
.h1{
    font-family: 'staatliches';
}

.first-Project{
    background: var(--dark-bg);
    grid-column: 2/ span 5;
    margin-top: 50rem;
    text-align: justify;
    border: 10px;
    border-radius: 10%;
    border-color: aqua;
}

.first-Project img{
    width: 100%;
    height: auto;
    margin-top: 1rem;
}

.second-Project{
    background: var(--dark-bg);
    grid-column: 8/ span 9;
    margin-right: 1rem;
    margin-top: 150rem;
    text-align: justify;
    border: 10px;
    border-radius: 10%;
    border-color: aqua;
    padding-right: 5rem;
}

.second-Project img{
    width: 80%;
    height: auto;
    margin-top: 1rem;
}
.third-Project{
    background: var(--dark-bg);
    grid-column: 2/ span 5;
    margin-top: 50rem;
}


.forth-Project{
    background: var(--dark-bg);
    grid-column: 8/ span 9;
    margin-right: 1rem;
    padding-right: 5rem;
    margin-top: 140rem;
    text-align: justify;
    border: 10px;
    border-radius: 10%;
    border-color: aqua;
    margin-bottom: 30rem;
}
</style>