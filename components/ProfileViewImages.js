import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Modal, ScrollView, Alert } from "react-native";
import { Button } from 'react-native-paper';

const ProfileViewImages = () => {
    return (
        <View>
            <Image style={styles.images} source={{ uri: "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg", }} />
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
            <Image style={styles.images} source={{ uri: "https://www.spidermancrawlspace.com/wp-content/uploads/2019/07/3131.jpg", }} />
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
            <Image style={styles.images} source={{ uri: "https://www.spidermancrawlspace.com/wp-content/uploads/2019/07/002SDM_Kirsten_Dunst_010.jpg", }} />
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
            <Image style={styles.images} source={{ uri: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/20/1495016266-mary-jane-watson-kirsten-dunst.jpg?resize=480:*", }} />
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
            <Image style={styles.images} source={{ uri: "https://img-9gag-fun.9cache.com/photo/aAgY6d0_460s.jpg", }} />
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
            <Image style={styles.images} source={{ uri: "https://pm1.narvii.com/6504/c00ee287b49cb954ea95876046d11c875dd5c5b5_00.jpg", }} />
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    images: { height: 400, width: 400 }
})

export default ProfileViewImages