import React from "react";
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";

const Pagination2 = ({setPageCurrent,pageCurrent,pages}) => {
    return (
        pages > 1 && (
            
        <Pagination>
            <PaginationItem 
            button  ripple="dark"
            onClick={(e)=>{
                e.preventDefault();
                if(pageCurrent!=1){
                setPageCurrent(1);
            }
            }}
            className='cursor-pointer'
            >
                Primero
            </PaginationItem>
            <div className={(pageCurrent < 2)? '':''}
            >
            <PaginationItem  ripple="dark" button
                        onClick={(e) => {
                            e.preventDefault();
                            if(pageCurrent>=1)
                            setPageCurrent(pageCurrent - 1)
                        else setPageCurrent(0)}}
                        className={((pageCurrent < 2)? 'cursor-not-allowed':'').concat(' !bg-gray-300 border !rounded-none cursor-pointer')}
                        disabled={pages <= 0?true:false}>
                <Icon name="keyboard_arrow_left"/>
                
            </PaginationItem>
            </div>
            <div className={(pageCurrent >= pages)? '':''}
            >
            <PaginationItem button  ripple="dark" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if(pageCurrent===pages)
                                            setPageCurrent(pages)
                                        else setPageCurrent(pageCurrent + 1)}}
                                        className={((pageCurrent >= pages)? 'cursor-not-allowed':'').concat(' !bg-gray-300 border !rounded-none cursor-pointer')}
                                        disabled={pageCurrent >= pages}>
                                        
                <Icon name="keyboard_arrow_right" />
                
            </PaginationItem>
            </div>
            <PaginationItem button  ripple="dark" className='cursor-pointer' onClick={(e)=>{
                e.preventDefault();
                if(pageCurrent!=pages){
                setPageCurrent(pages);
            }
            }}>
                Ultimo
            </PaginationItem>
        </Pagination>)
    );
}

export default Pagination2;