import React from 'react';
import Icon3 from '../../images/icon3.png'
import Icon4 from '../../images/Icon4.png'
import Icon5 from '../../images/Icon5.png'
import Icon6 from '../../images/Icon6.png'
import WhyUsCard from './WhyUsCard';

function WhyUsSection() {
    return (
        <div className="whyUsSection w-full min-h-[450px] flex justify-center items-center">
            <div className="w-[90%] h-80">
                <div className="h-1/5 flex justify-start items-center">
                    <h1 className="font-medium text-3xl pl-8">Why choose us?</h1>
                </div>
                <div className="h-4/5 grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                    <WhyUsCard
                        iconSrc={Icon3}
                        title="Special Financing Offers"
                        description="Our stress-free finance department can find financial solutions to save you money."
                    />
                    <WhyUsCard
                        iconSrc={Icon4}
                        title="Trusted Warranty"
                        description="Extended warranty programs to protect your investment and provide peace of mind."
                    />
                    <WhyUsCard
                        iconSrc={Icon5}
                        title="Fast Delivery"
                        description="Reliable and quick delivery services across the country at no extra charge."
                    />
                    <WhyUsCard
                        iconSrc={Icon6}
                        title="Expert Support"
                        description="Experienced professionals ready to help with all your service and repair needs."
                    />
                </div>
            </div>
        </div>
    );
}

export default WhyUsSection;