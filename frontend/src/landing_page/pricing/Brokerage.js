import React from 'react';

function Brokerage() {
    return (
        <div className='container border-top mb-5 '>
            <div className='row  mt-5'>
                <div className='col-8'>
                    <a href='' className='text-center mt-3' style={{ textDecoration: "none" }}><h4>Brokerage Calculator</h4></a>
                    <ul className='mt-5'>
                        <li className='text-muted mb-4'>Call & Trade and RMS auto-squareoff: Additional charges of 750 + GST per order. *</li>
                        <li className='text-muted mb-4'>Digital contract notes will be sent via e-mail.</li>
                        <li className='text-muted mb-4'>Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li>
                        <li className='text-muted mb-4'>For NRI account (non-PIS), 0.5% or 2100 per executed order for equity (whichever is lower).</li>
                        <li className='text-muted mb-4'>For NRI account (PIS), 0.5% or ₴200 per executed order for equity (whichever is lower).</li>
                        <li className='text-muted mb-4'>If the account is in debit balance, any order placed will be charged ≥40 per executed order instead of 220 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <a href=''className='text-center' style={{ textDecoration: "none" }}><h4>List of charges</h4></a>

                </div>
            </div>
        </div>
    );
}

export default Brokerage;