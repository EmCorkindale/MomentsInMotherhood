import SubscriptionForm from "../components/Home/SubscriptionForm";

export function Home() {

    return (

        <div className="container-fluid homepage-bgimage">
            <div className="heading">
                <h1>Moments in Motherhood</h1>
            </div>
            <div className="paragraph">
                <p>Welcome to Moments in Motherhood, your landing page for information and support for mother and pēpi.</p>
            </div>
            <div className="subscriptionForm">
                <SubscriptionForm />
            </div>
        </div>
    )
}