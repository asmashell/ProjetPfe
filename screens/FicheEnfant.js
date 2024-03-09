/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const FicheEnfant = () => {
  const questions = [
    {
      id: 1,
      text: [
        'رقم الكشف: ',
        'رقم ملف التشخيص:',
        'اسم ولقب الأم: ',
        'المستوى التعليمي للأم:',
        'مهنة الأم: ',
        'اسم ولقب الأب:',
        'المستوى التعليمي للأب:',
        'مهنة الأب: ',
        'الهاتف: ',
        'اسم ولقب الطفل: ',
        'تاريخ ميلاد الطفل: ',
        'الرتبة في العائلة: ',
        'عدد الإخوة والأخوات: ',
      ],
    },
    {
      id: 2,
      text: [
        'وجود مرض عائلي:',
        ' وجود مرض الصرع في العائلة:',
        { question: ' الحمل متابع بشكل جيد: ', isSpecific: true },
        { question: 'مبكر:', isSpecific: true },
        'المدة :',
        { question: 'مشاكل حديثي الولادة: ', isSpecific: true },
        { question: 'القرابة: ', isSpecific: true },
        { question: ' نوبات حمى عند الولادة: ', isSpecific: true },
        { question: 'ضعف ادراكي:', isSpecific: true },
        { question: 'اضطرابات سلوكية: ', isSpecific: true },
        { question: 'تأخير في النطق: ', isSpecific: true },
        'المستوى الدراسي:',
        'المعدل: ',
        { question: ' رسوب في الصف: ', isSpecific: true },
         'إذا كان نعم، عدد المرات والمستويات:'
      ],
      
    },
   {
      id: 3,
      text: [
        { question: 'وجود اضطرابات تعلم عند الأشقاء: ', isSpecific: true },
        { question: 'وجود اضطرابات تعلم في العائلة: ', isSpecific: true },
        ' إذا كانت الإجابة نعم ، درجة العلاقة و العدد',
         ' عمر اكتشاف اضطرابات التعلم و نوعها:',
        { question: 'اضطرابات الذاكرة: ', isSpecific: true },
        { question: 'اضطرابات النوم: ', isSpecific: true },
        { question: 'إذا كانت الإجابة نعم ، نوع الاضطرابات:', isSpecific: true },
         'حالة المريض',
        { question: ' تعاوني:', isSpecific: true },
        { question: 'مضطرب: ', isSpecific: true },
        { question: 'نقص الحركة: ', isSpecific: true },
        { question: 'اضطرابات المشي: ', isSpecific: true },
        { question: 'اضطرابات حسية: ', isSpecific: true },
        { question: 'اضطرابات اللغة: ', isSpecific: true },
        'الاضطرابات الأخرى:',
        'العلاج الحالي:',
      ],
    },

  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [showChildRecord, setShowChildRecord] = useState(true);

  const handleAnswer = (answer, questionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = { id: questionIndex, answer };
    setSelectedAnswers(updatedAnswers);
  };


  const renderChildRecordPage = () => {
    return (
      <ImageBackground
        source={require('../assets/8.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.childRecordContainer}>
            <Text style={styles.childRecordTitleLine1}>دفتر</Text>
            <Text style={styles.childRecordTitleLine2}>المعاينة</Text>
            <TouchableOpacity
              style={styles.childRecordButton}
              onPress={() => setShowChildRecord(false)}
            >
              <Text style={styles.childRecordButtonText}>التالي</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const renderQuestionPage = () => {
    const currentQuestionData = questions[currentQuestion];
    if (!currentQuestionData) {
      console.log('User answers:', selectedAnswers);
      return null;
    }

    return (
      <KeyboardAwareScrollView
        style={{ flex: 1, backgroundColor: '#FDE5F9' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.questionContainer}
        scrollEnabled={true}
        extraHeight={100}
        keyboardShouldPersistTaps="handled"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : -100}
      >
        <ScrollView>
          <View style={styles.questionFrame}>
            {currentQuestionData.text.map((question, index) => (
              <View key={index} style={styles.questionRow}>
                <Text style={styles.questionText}>
                  {question.question ? question.question : question}
                </Text>
                {question.isSpecific ? (
                  <View style={styles.answerContainer}>
                    <TouchableOpacity
                      style={[
                        styles.answerButton,
                        selectedAnswers[currentQuestion]?.id === index &&
                        selectedAnswers[currentQuestion]?.answer === 'نعم'
                          ? styles.selectedButton
                          : null,
                      ]}
                      onPress={() => handleAnswer('نعم', index)}
                    >
                      <Text style={styles.answerButtonText}>نعم</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.answerButton,
                        selectedAnswers[currentQuestion]?.id === index &&
                        selectedAnswers[currentQuestion]?.answer === 'لا'
                          ? styles.selectedButton
                          : null,
                      ]}
                      onPress={() => handleAnswer('لا', index)}
                    >
                      <Text style={styles.answerButtonText}>لا</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TextInput
                    style={styles.answerInput}
                    placeholder="الإجابة هنا"
                    onChangeText={(text) => handleAnswer(text, index)}
                  />
                )}
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => setCurrentQuestion(currentQuestion + 1)}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestion < questions.length - 1 ? 'التالي' : 'التالي'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
    >
      {showChildRecord ? renderChildRecordPage() : renderQuestionPage()}
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: -100,
    left: -200,
    right: -90,
    bottom: -100,
  },
  childRecordContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childRecordTitleLine1: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  childRecordTitleLine2: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 130,
  },
  childRecordButton: {
    backgroundColor: '#EE75CD',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 200,
  },
  childRecordButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDE5F9',
    paddingTop: 12, // Vous pouvez ajuster cette valeur selon votre besoin

  },
  questionFrame: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 80,
    paddingVertical: 8,
    borderRadius: 15,
    maxWidth: 600,
  },
  questionRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  questionText: {
    fontSize: 15,
    textAlign: 'right',
    color: '#000000',
  },
  answerInput: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    marginLeft: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    textAlign: 'left',
    marginBottom: 4,  // Ajoutez cette ligne pour définir la marge inférieure


  },
  answerContainer: {
    flexDirection: 'row-reverse',
  },
  answerButton: {
    borderColor: '#000000',
    paddingVertical: 1,
    borderWidth: 1,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginBottom: 4,  // Ajoutez cette ligne pour définir la marge inférieure
    marginLeft: 10,
  },
  selectedButton: {
    backgroundColor: '#FBBDE8',
  },
  answerButtonText: {
    color: '#000000',
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: '#EE75CD',
    paddingVertical: 8,
    paddingHorizontal: 100,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default FicheEnfant;