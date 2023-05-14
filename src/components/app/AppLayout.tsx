import { ReactNode } from 'react';
import './assets/app-layout.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface AppLayoutProps{
    readonly children: ReactNode;
}

export default function AppLayout({
    children
}:AppLayoutProps){
    return (
        <div className="app-layout">  
            <div className="app-layout-header">
                <Header/>
            </div>
            <div className="app-layout-children">
                {children}
           </div>
            <div className="app-layout-footer">
                <Footer/>
            </div>
        </div>
    )
}