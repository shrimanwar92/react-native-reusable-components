import React, {useEffect, useState} from "react";
import { View, Text, Dimensions, StyleSheet, Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const { width } = Dimensions.get('window');

export default function OfflineIndicator() {
    const [isConnected, setIsConnected] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        //return unsubscribe();
    }, []);

    return (
        !isConnected &&
        (<View style={styles.offlineContainer}>
            <Text testID={'trn-internet-info__status'} style={styles.offlineText}>No Internet Connection</Text>
        </View>)
    );
}

const styles = StyleSheet.create({
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,
        display: 'flex',
        top: 65,
        zIndex: 999
    },
    offlineText: {
        color: '#fff'
    }
});