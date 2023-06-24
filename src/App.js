import './App.css';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Exam from './components/pages/exam/Exam';

function App() {
    return (
        <div className="App">
            <Header />
            <div className='main-container'>
                <Exam />
            </div>
            <Footer />
        </div>
    );
}

export default App;
