
'use client'
import ReactPaginate from 'react-paginate';
import { useParams, useSearchParams } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PaginatedItems({ pageSize = 10, itemNumber = 1, onPageChange = () => { } }) {
    const searchParams = useSearchParams();
    console.log()

    const pageCount = Math.ceil(Number(itemNumber) / pageSize);
    let page = searchParams.get("page")
    if (pageCount < 1) {
        return null;
    }


    return (
        <ReactPaginate

            previousLabel={<ChevronLeft />}
            nextLabel={<ChevronRight />}
            breakLabel="..."
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={onPageChange}
            containerClassName="flex justify-end items-center mt-1 px-4 h-[50px]"
            pageClassName="mx-1  p-1 px-3 hover:bg-gray-400 rounded-lg Transition cursor-pointer"
            activeClassName=" text-primary border-primary font-bold  rounded-lg shadow-md border p-1 px-3"
            previousClassName="text-2xl"
            nextClassName="text-2xl"
            breakClassName="text-gray-500 "
            disabledClassName="opacity-50"
            forcePage={page ? page - 1 : 0}
        />
    );
}