import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, G, Rect, Text } from 'react-native-svg'
import * as d3 from 'd3'

interface Props {
    backgroundColor: string
}
const DashboardAreaChart: React.FC<Props> = (props: Props) => {

    const GRAPH_MARGIN = 20
    const GRAPH_BAR_WIDTH = 8
    const colors = {
        axis: '#E4E4E4',
        bars: '#ffffff'
    }

    // Dimensions
    let SVGHeight = 190;
    let SVGWidth = 340;
    let graphHeight = SVGHeight - 2 * GRAPH_MARGIN
    let graphWidth = SVGWidth - 2 * GRAPH_MARGIN
    const data = [
        { label: 'Jan', value: 500 },
        { label: 'Feb', value: 312 },
        { label: 'Mar', value: 424 },
        { label: 'Apr', value: 745 },
        { label: 'May', value: 89 },
        { label: 'Jun', value: 434 },
        { label: 'Jul', value: 650 },
        { label: 'Aug', value: 980 },
        { label: 'Sep', value: 123 },
        { label: 'Oct', value: 186 },
        { label: 'Nov', value: 689 },
        { label: 'Dec', value: 643 }
    ]

    const round = 100;
    const unit = '€'

    // X scale point
    const xDomain = data.map(item => item.label)
    const xRange = [0, graphWidth]
    const x = d3.scalePoint()
        .domain(xDomain)
        .range(xRange)
        .padding(1)

    // Y scale linear
    const maxValue = d3.max(data, d => d.value)
    const topValue = Math.ceil(maxValue / round) * round
    const yDomain = [0, topValue]
    const yRange = [0, graphHeight]
    const y = d3.scaleLinear()
        .domain(yDomain)
        .range(yRange)



    return (
        <View style={[styles.Graph, { backgroundColor: props.backgroundColor }]}>
            <Svg height={SVGHeight} width={SVGWidth} style={{ alignSelf: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <G y={graphHeight + GRAPH_MARGIN} >

                    {/* bars */}
                    {data.map(item => (
                        <Rect
                            key={'bar' + item.label}
                            x={x(item.label) - (GRAPH_BAR_WIDTH / 2) + 20}
                            y={y(item.value) * -1}
                            rx={4}
                            width={GRAPH_BAR_WIDTH}
                            height={y(item.value)}
                            fill={colors.bars}
                        />
                    ))}

                    {/* labels */}
                    <Text
                        key={'label' + data[0].label}
                        fontSize="10"
                        fill="white"
                        fontWeight="bold"
                        x={x(data[0].label) + 20}
                        y="10"
                        textAnchor="middle">{data[0].label}</Text>

                    <Text
                        key={'label' + data[data.length - 1].label}
                        fontSize="10"
                        fontWeight="bold"
                        fill="white"
                        x={x(data[data.length - 1].label) + 20}
                        y="10"
                        textAnchor="middle">{data[data.length - 1].label}</Text>

                </G>
            </Svg>
        </View>
    );

}

const styles = StyleSheet.create({
    Graph: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width: '100%',
        marginBottom: 20,
        shadowColor: "rgba(58,55,55,0.31)",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 3,
        aspectRatio: 16 / 9,
        alignContent: 'center',
    }
});

export default DashboardAreaChart;
