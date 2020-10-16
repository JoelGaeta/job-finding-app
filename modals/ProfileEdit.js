import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Modal, ScrollView, Alert } from "react-native";
import { Button } from 'react-native-paper';
import ModalButtons from '../components/ModalButtons'
const ProfileEdit = ({ profileEditModalVisible, setProfileEditModalVisible }) => {
    const [profilePictures] = useState([
        { img: "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg" },
        { img: "https://www.spidermancrawlspace.com/wp-content/uploads/2019/07/3131.jpg" },
        { img: "https://img-9gag-fun.9cache.com/photo/aAgY6d0_460s.jpg" },
        { img: "https://www.spidermancrawlspace.com/wp-content/uploads/2019/07/002SDM_Kirsten_Dunst_010.jpg" },
        { img: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/20/1495016266-mary-jane-watson-kirsten-dunst.jpg?resize=480:*" },
        { img: "https://pm1.narvii.com/6504/c00ee287b49cb954ea95876046d11c875dd5c5b5_00.jpg" }
    ])
    return (
        <Modal animationType="slide" visible={profileEditModalVisible}>
            <View style={styles.header}>
                <Text>Edit Profile</Text>
                <Button
                    style={styles.modalExitButton}
                    onPress={() => setProfileEditModalVisible(false)}
                    mode="text">
                    <Text>Done</Text>

                </Button>
            </View>
            <View style={styles.editSection}>
                <ScrollView >
                    <View style={styles.profilePictures}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: profilePictures[0].img,
                                }}
                                style={styles.images}
                            />
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: profilePictures[1].img,
                                }}
                                style={styles.images}
                            />
                        </View>

                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: profilePictures[2].img,
                                }}
                                style={styles.images}
                            />
                        </View>

                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: profilePictures[3].img,
                                }}
                                style={styles.images}
                            />
                        </View>

                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: profilePictures[4].img,
                                }}
                                style={styles.images}
                            />
                        </View>

                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: profilePictures[5].img,
                                }}
                                style={styles.images}
                            />
                        </View>
                    </View>


                    <ModalButtons />

                </ScrollView>

            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    header: { flex: 1 },
    editSection: { flex: 9 },
    profilePictures: { flexDirection: 'row', flexWrap: 'wrap' },
    imageContainer: {
        height: 87.5,
        width: 87.5,
        position: "relative",
        borderRadius: 87.5 / 2,
        borderWidth: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 10,
    },

    images: {
        position: "absolute",
        height: 75,
        width: 75,
        borderWidth: 5,
        borderRadius: 75 / 2,
        resizeMode: "contain",
    },
})

export default ProfileEdit