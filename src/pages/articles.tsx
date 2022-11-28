import { BodyHeader } from "../components/BodyHeader";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Articles () {
    return (
        <>
            <Header text={'Статьи о здоровье'} />
            <BodyHeader text={'Полезные статьи и рекомендации'} />
            <Footer />
        </>
    )
}