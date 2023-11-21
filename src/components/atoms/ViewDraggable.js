import { useRef, useState} from "react"
import { View,  PanResponder, Animated, StyleSheet } from "react-native"


export const ViewDraggable = (props) => {


    const {children, style, handleClose = () => {}, heightToClose} = props

    const pan = useRef(new Animated.ValueXY()).current   
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,

        onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dy > 0) {
                    Animated.event([null, { dy: pan.y }], {
                        useNativeDriver: false,
                    })(evt, gestureState);
                }
            }
        ,
        onPanResponderRelease: (e, gestureState) => {
            if(gestureState.dy > heightToClose){
                handleClose()
            }else{
                Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false,
                }).start()
            }

        },
    })

    return(
          <Animated.View
            {...panResponder.panHandlers}
            style={[ style,
                {transform: [{ translateX: pan.x }, { translateY: pan.y }]}]}
          >
            {children}
          </Animated.View>

        
    )
}
