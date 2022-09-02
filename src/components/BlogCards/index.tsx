import React from 'react';
import SmallCard from "../../components/SmallCard";

const BlogCards = () => {

    return (
        <div>
            <div className={'container'}>
                <div>
                    <h2>More From News</h2>
                </div>
                <div className={'row row-border'}>
                    <div className={'col-md-6 mb-4 '}>
                        <SmallCard
                            title='We introduces new professional training to support growing IT'
                            subTitle='June 24,2022'
                            photo={"/resimler/resim.jfif"}
                            url={''}
                        />
                    </div>
                    <div className={'col-md-6 mb-4'}>
                        <SmallCard
                            title='We introduces new professional training to support growing IT'
                            subTitle='June 24,2022'
                            photo={"/resimler/resim.jfif"}
                            url={''}
                        />
                    </div>
                </div>
                <div className={'row row-border'}>
                    <div className={'col-md-6 mb-4'}>
                        <SmallCard
                            title='We introduces new professional training to support growing IT'
                            subTitle='June 24,2022'
                            photo={"/resimler/resim.jfif"}
                            url={''}
                        />
                    </div>
                    <div className={'col-md-6 mb-4'}>
                        <SmallCard
                            title='We introduces new professional training to support growing IT'
                            subTitle='June 24,2022'
                            photo={"/resimler/resim.jfif"}
                            url={''}
                        />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-md-6 mb-4'}>
                        <SmallCard
                            title='We introduces new professional training to support growing IT'
                            subTitle='June 24,2022'
                            photo={"/resimler/resim.jfif"}
                            url={''}
                        />
                    </div>
                    <div className={'col-md-6 mb-4'}>
                        <SmallCard
                            title='We introduces new professional training to support growing IT'
                            subTitle='June 24,2022'
                            photo={"/resimler/resim.jfif"}
                            url={''}
                        />
                    </div>
                </div>
                <button className={'btn'}>
                    Load More
                </button>
            </div>
        </div>
    );

}

export default BlogCards;