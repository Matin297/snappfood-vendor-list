import React, { useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchVendors } from 'store/vendors/actions';
// COMPONENTS
import VendorItem from './vendor-item';
import SortMenu from './sort';

function VendorsPage({ fetchVendors, vendorsData }) {

    const observer = useRef()
    const lastVendorRef = useCallback(node => {
        if (vendorsData.loading)
            return;

        if (observer.current)
            observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && vendorsData.data.length !== vendorsData.count)
                fetchVendors({ page: vendorsData.params.page + 1 });
        });

        if (node)
            observer.current.observe(node);
    }, [vendorsData.count, vendorsData.data, vendorsData.loading, vendorsData.params, fetchVendors]);

    const requestSortHandler = useCallback(sortings => {
        fetchVendors({
            page: 0,
            filters: JSON.stringify({
                sortings
            })
        });
    }, [fetchVendors])

    useEffect(() => {
        fetchVendors({ page: 0 });
    }, [fetchVendors]);

    return (
        <div>
            <SortMenu
                options={vendorsData.sort_options}
                onRequestSortHandler={requestSortHandler}
                params={vendorsData.params}
            />
            <div className="vendors">
                {
                    vendorsData.data.map((vendor, index) => {
                        if (vendor.type !== 'VENDOR')
                            return null;

                        if (index === vendorsData.data.length - 1)
                            return (
                                <div ref={lastVendorRef} key={vendor.data.id}>
                                    <VendorItem vendor={vendor} />
                                </div>
                            );

                        return <VendorItem key={vendor.data.id} vendor={vendor} />;
                    })
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    vendorsData: state.vendors
})

const mapDispatchToProps = { fetchVendors };

export default connect(mapStateToProps, mapDispatchToProps)(VendorsPage);
