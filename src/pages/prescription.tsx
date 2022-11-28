import { BodyHeader } from "../components/BodyHeader";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Prescription () {
    return (
        <>
            <Header text={'Назначения'} />
            <BodyHeader text={'Отмечайте выполнение рекомендаций врача'} />
            <Footer />
        </>
    )
}