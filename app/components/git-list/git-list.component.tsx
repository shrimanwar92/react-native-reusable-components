import React, {useEffect, useReducer, useCallback, useState} from 'react';
import {Body, Container, Header, Spinner, Title, Toast} from 'native-base';
import {Actions} from "react-native-router-flux";
import ListComponent, {ListItemType} from "../../shared/components/custom-list/list.component";
import {StyleSheet, View} from "react-native";
import useFetch from "../../shared/hooks/fetch.hook";
import axios from "axios";
import Pagination, {PaginationResponse} from "../../shared/components/pagination/pagination";

export interface GitRepo {
    id: number,
    name: string,
    owner: {
        login: string,
        avatar_url: string,
        url: string,
        repos_url: string
    }
}

const getRepos = (items: GitRepo[]): ListItemType[] => {
    return items.map(item => {
        return {
            id: item.id,
            imageUrl: item.owner.avatar_url,
            heading: item.name,
            subheading: item.id.toString(),
            price: 32335,
            rating: 5
        }
    });
};

export default function GitListComponent() {
    const [loading, setLoading] = useState(true);
    const [repos, setRepos] = useState<GitRepo[]>([]);

    async function getData() {
        setLoading(true);
        try {
            return await axios.get("https://api.github.com/repositories");
        } catch (e) {
            Toast.show({
                text: "List could not be loaded.",
                buttonText: "Okay",
                type: "danger"
            });
        } finally {
            setLoading(false);
        }
    }

    const goToGitInfo = (item: ListItemType) => Actions.GitItem(item);

    const loadMore = async (pagination: PaginationResponse) => {
        const response = await getData();
        setRepos((repos) => [...repos, ...response!.data.slice(pagination.beginIndex, pagination.endIndex)]);
    };

    return(
        <Container>
            <Header>
                <Body style={styles.header}>
                    <Title>Git list</Title>
                </Body>
            </Header>
            {loading
                ? <Spinner key={Math.random()}></Spinner>
                : <ListComponent items={getRepos(repos)} onClick={goToGitInfo}></ListComponent>
            }
            <View>
                <Pagination itemsPerPage={10} onLoadMore={loadMore}></Pagination>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center'
    }
});