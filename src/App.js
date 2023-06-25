import './App.css';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Exam from './components/pages/exam/Exam';
import { MainContextProvider } from './contexts/MainContext';
import { Notifications } from './components/common';

function App() {
    return (
        <MainContextProvider>
            <div className="App">
                <Header />
                <div className='main-container'>
                    <Exam />
                </div>

                <Notifications />
                <Footer />
            </div>
        </MainContextProvider>
    );
}

export default App;
