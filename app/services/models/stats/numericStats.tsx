import React, { useState } from 'react';
import SatelliteStats from './satelliteStats';
import DashboardNumeric from 'cooper-app/app/components/cards/stats/numeric/dashboardNumeric';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modal } from 'react-native';
import ThreadDetailsTemplate from 'cooper-app/app/screens/ThreadDetails/ThreadDetails.template';

interface Props {
    title: string,
    value: string | number,
    unit: string,
    color: string,
}

const NumericStats: React.FC<Props> = (props: Props) => {

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                presentationStyle={'pageSheet'}
            >
                <ThreadDetailsTemplate></ThreadDetailsTemplate>
            </Modal>

            <TouchableOpacity style={{ width: '100%' }} onPress={() => setModalVisible(true)}>
                <DashboardNumeric
                    title={props.title}
                    value={props.value}
                    unit={props.unit}
                    accentColor={props.color}
                    aspecRatio={1}
                ></DashboardNumeric>
            </TouchableOpacity>
        </>
    );
}

export default NumericStats;

