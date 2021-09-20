import Link from 'next/link';

const NewsPage = () => {
    return (
        <>
            <h1>
                The News page
            </h1>
            <ul>
                <li><Link href="news/link_1"> Next Js - 1</Link></li>
                <li>Nexx Js - 2</li>
            </ul>
        </>
    )
}

export default NewsPage;