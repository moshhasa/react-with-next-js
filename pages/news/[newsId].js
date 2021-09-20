import { useRouter } from 'next/router';

const DetaisPage = () => {
    const router = useRouter();
    const newsId = router.query.newsId;
    return (
        <h1>
           Details page  -  {newsId}
        </h1>
    )
}

export default DetaisPage;