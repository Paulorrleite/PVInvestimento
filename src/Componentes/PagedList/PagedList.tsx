import React, { useEffect, useState } from 'react';
import Share from '../Sharecards/Share';
import { FetchShareListPaged } from '../../Servicos/Login';
import './PagedList.css';

const PagedList: React.FC = () => {
    const [shares, setShares] = useState<any[]>([]);
    const [page] = useState(1);
    const [resultsPerPage] = useState(6); // 6 resultados por página

    useEffect(() => {
        const fetchShares = async () => {
            try {
                const data = await FetchShareListPaged(page, resultsPerPage);
                setShares(data);
            } catch (error) {
                console.error('Erro ao carregar ações: ', error);
            }
        };

        fetchShares();
    }, [page, resultsPerPage]);

    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="row">
                            <div className="col-4 card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                            <div className="col-4 card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                            <div className="col-4 card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                            <div className="col-4 card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                            <div className="col-4 card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                        </div>
                    </div>
                    {/* Adicione mais carousel-item conforme necessário */}
                </div>
                <div className='button-margin'>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default PagedList;