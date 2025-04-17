
import Header from "./playground/Header";
import Content from "./playground/Content";
import Footer from "./playground/Footer";
import Login from "./playground/Login"
import Form from "./playground/Form";

const App2 = () => {
    let  currentYear = 2020;
    let isLogin = true;
    let appname = "Blogger";
    let author = "Psalm Sam";
    let available_titles = ["Life of a King", "Blacklist", "Tortoise and Lio", "Breaking bad", "litte angel", "cocomelon"];
   // a function that fetches first movie in the title
    function fetchFirstMovie(){
        return available_titles[0];
    }

    if(isLogin == true){
        return (
            <div className="container">
                {/* children components will be listed here */}
                <Form/>
                <Header xyz={appname} currentYear={currentYear} />
                <Content xyz={appname}  author = {author} titles={available_titles} firstMovie={fetchFirstMovie} 
                isLogin={isLogin}/>
                <Footer  xyz={appname}  author = {author} currentYear={currentYear} />
            </div>
          )
    }else{
        return(
            <Login/>
        )
    }
}
export default App2