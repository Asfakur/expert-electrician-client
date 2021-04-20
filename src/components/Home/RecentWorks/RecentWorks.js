import React from 'react';
import Work from '../Work/Work';

const worksData = [
    {
        no: 1,
        image: 'https://premiumlayers.com/html/handyman2/images/portfolio4.png'
    },
    {
        no: 2,
        image: 'https://5.imimg.com/data5/HW/KX/QA/SELLER-20230605/electrical-works-500x500.jpg'
    },
    {
        no: 3,
        image: 'http://st2.depositphotos.com/1010613/7207/i/450/depositphotos_72077837-Technician-Repairing-Air-Conditioner.jpg'
    }
]

const RecentWorks = () => {
    return (
        <section>
            <div>
                <h1 className="text-center">Recent Works Done</h1>
                <hr className="wave-icon" />
            </div>
            <div className="row container-fluid mt-4">
                {
                    worksData.map(work => <Work work={work} key={work.no}></Work>)
                }
            </div>
        </section>
    );
};

export default RecentWorks;