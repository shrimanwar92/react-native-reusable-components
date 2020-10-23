import React, {useState, useEffect} from "react";
import {Button, Container, Text} from "native-base";
import {View, StyleSheet} from "react-native";

export interface PaginationProps {
    itemsPerPage: number,
    totalItems?: number,
    onLoadMore: (pagination: PaginationResponse) => void
}

export type PaginationResponse = {
    page: number,
    beginIndex: number,
    endIndex: number
};

export default function Pagination(props: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(1);
    //const maxPage = Math.ceil(props.totalItems/props.itemsPerPage);

    useEffect(() => {
        const beginIndex = (currentPage - 1) * props.itemsPerPage;
        const endIndex = beginIndex + props.itemsPerPage;
        props.onLoadMore({page: currentPage, beginIndex, endIndex});
    }, [currentPage]);

    const next = () => {
        //setCurrentPage((currentPage: number) => Math.min(currentPage + 1, maxPage));
        setCurrentPage(currentPage + 1);
    };

    return (
        <Container>
            <View style={styles.loadMore}>
                <Button onPress={next} testID={"trn-pagination__load-more"}>
                    <Text>Load more</Text>
                </Button>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    loadMore: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    }
});