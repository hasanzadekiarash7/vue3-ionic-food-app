<template>
    <ion-page>
        <ion-content class="ion-padding">
            <div class="verify-container">
                <ion-label class="verify-container-title">verify your account</ion-label>
                <ion-text class="verify-container-subtitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </ion-text>
                <ion-text class="verify-container-subtitle">
                    your number is : {{ otpVal.toFixed(0) }}
                </ion-text>
                <ion-input type="tel" fill="solid" v-model="otp" :maxlength="4" counter
                    class="verify-container-tel"></ion-input>
                <ion-button href="/tabs/tab1" class="verify-container-submit" :disabled="isDisabled" expand="full"
                    color="primary" shape="round">
                    submit
                </ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSelect, IonInput, IonSelectOption, IonSkeletonText } from '@ionic/vue';
import { paperPlane, locationOutline, notifications, basket, ticket, add, settings, language, information, search, sparkles } from 'ionicons/icons';
import { ref, watch } from 'vue';
const otpVal = ref(Math.random() * 10000)
const isDisabled = ref(true)
const otp = ref()
watch(() => otp.value, () => {
    if (otp.value == otpVal.value.toFixed(0)) {
        isDisabled.value = false
    } else {
        isDisabled.value = true
    }
})
</script>

<style lang="scss" scoped>
@import url('../Assets/interface/verifyAccount.scss');
</style>