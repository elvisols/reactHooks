import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import AboutTab from "./AboutTab";
import PostsTab from "./PostsTab";
import ContactTab from "./ContactTab";

export type Tab = 'about' | 'posts' | 'contact';

/**
 * useTransition: used to prevent block the UI until a particular slow component completes rendering
 * E.g: clicking the profile button before the aboutUs or contact button.
 * so with useTransition we want to make clicking the about and contact a priority!
 */
const Transition = () => {
    // const [isPending, startTransition] = useTransition(); 
    const [tab, setTab] = useState<Tab>('about');

    const selectTab = (tab: Tab) => {
        setTab(tab);
        // method 1:
        // startTransition(() => { // this works for anything that updates the state
        //     setTab(tab);
        // })
    }

    return (
        <>
            <div>
                <TabButton 
                    title='About' 
                    onClick={() => selectTab('about')} 
                    variant={ tab === 'about' ? 'primary' : 'secondary' }
                />
                <TabButton 
                    title='Posts' 
                    onClick={() => selectTab('posts')} 
                    variant={ tab === 'posts' ? 'primary' : 'secondary' }
                />
                <TabButton 
                    title='Contact' 
                    onClick={() => selectTab('contact')} 
                    variant={ tab === 'contact' ? 'primary' : 'secondary' }
                />
            </div>

            {tab === 'about' && <AboutTab />}
            {tab === 'posts' && <PostsTab />}
            {tab === 'contact' && <ContactTab />}
        </>
    )
}

export default Transition;