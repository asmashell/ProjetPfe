//* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import '@react-native-community/checkbox';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

const FicheEnfant = () => {
  const [answers, setAnswers] = useState({});
  const questions = [
    { id: 1, text: 'هل يقوم الطفل بكتابة الحروف بشكل صحيح ومتقن، أم يظهر تشويش وعدم وضوح في الشكل؟', type: 'dysgraphia' },
    { id: 2, text: 'هل يقوم طفلك بتبديل أو تحويل الحروف على سبيل المثال "ر" كـ "ز"', type: 'dysgraphia' },
    { id: 3, text: 'هل يواجه طفلك صعوبة في تفكيك الكلمات إلى كلمات فردية؟', type: 'dyslexia' },
    { id: 4, text: 'هل يمكن للطفل الحفاظ على حجم متساوي للحروف والكلمات على مدى النص؟', type: 'dysgraphia' },
    { id: 5, text: 'هل يظهر الطفل صعوبة في الحفاظ على مسافات منتظمة بين الكلمات خلال الكتابة؟', type: 'dysgraphia' },
    { id: 6, text: 'هل يواجه الطفل صعوبة في نسخ النماذج أو الرسوم؟', type: 'dysgraphia' },
    { id: 7, text: 'هل يواجه الطفل صعوبة في التعرف على الحروف الهجائية وتسميتها بسرعة؟', type: 'dyslexia' },
    { id: 8, text: 'هل يجد الطفل صعوبة في التمييز بين الحروف المشابهة، مثل "ب" و "ت"؟', type: 'dyslexia' },
    { id: 9, text: 'هل يواجه الطفل صعوبة في تسمية الكلمات بسرعة وبدون أخطاء؟', type: 'dyslexia' },
    { id: 10, text: 'هل يمكن للطفل قراءة الكلمات المألوفة بدون تلخيص أو تشويش؟', type: 'dyslexia' },
    { id: 11, text: 'هل يواجه الطفل صعوبة في تفكيك الكلمات إلى مكوناتها الصوتية؟', type: 'dyslexia' },
    { id: 12, text: 'هل يتعثر في قراءة الكلمات الطويلة أو المعقدة؟', type: 'dyslexia' },
    { id: 13, text: 'هل يواجه الطفل صعوبة في التهجئة الصحيحة للكلمات؟', type: 'dyslexia' },
    { id: 14, text: 'هل يحدث تبديل في ترتيب الحروف أو الأصوات عند كتابة الكلمات؟', type: 'dyslexia' },
    { id: 15, text: 'هل يجد الطفل صعوبة في التمييز بين الكلمات المتشابهة، مثل "بيت" و "بات"؟', type: 'dyslexia' },
    { id: 16, text: 'هل يظهر الطفل القدرة على استكمال الجمل والنصوص دون التعثر أو الرجوع المتكرر؟', type: 'dyslexia' },
    { id: 17, text: 'هل يواجه الطفل صعوبة في تعرف الأعداد وتسلسلها بشكل صحيح؟', type: 'dyscalculia' },
    { id: 18, text: 'هل يمكن للطفل التعرف على الرموز الحسابية مثل + و - وفهم معناها؟', type: 'dyscalculia' },
    { id: 19, text: 'هل يستطيع الطفل إجراء العمليات البسيطة الحسابية بشكل صحيح؟', type: 'dyscalculia' },
    { id: 20, text: 'هل يستطيع التعرف على الأشكال الهندسية الأساسية مثل المربعات والدوائر والمثلثات؟', type: 'general' },
    { id: 21, text: 'هل يظهر الطفل صعوبة في فهم المفاهيم الكمية، مثل أكبر وأصغر، والترتيب الكمي؟', type: 'general' },
  ];
  const handleCheckBoxChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = () => {
    console.log('الإجابات:', answers);
    const diagnosticResult = determineDiagnosticResult();
    console.log('نتيجة التشخيص:', diagnosticResult);
  };

  const determineDiagnosticResult = () => {
    // Mettez en place votre logique pour déterminer le résultat du diagnostic ici
    // Vous pouvez utiliser les réponses aux questions pour cela
    return 'طبيعي';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.heading}>سجل الطفل</Text>
      </View>
      <View style={styles.separator} />
      {questions.map((question) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.text}</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={answers[question.id] === 'نعم'}
              onPress={() => handleCheckBoxChange(question.id, 'نعم')}
            />
            <Text style={styles.checkboxText}>نعم</Text>
            <CheckBox
              checked={answers[question.id] === 'لا'}
              onPress={() => handleCheckBoxChange(question.id, 'لا')}
            />
            <Text style={styles.checkboxText}>لا</Text>
          </View>
        </View>
      ))}
      <Button
        title="إرسال"
        onPress={handleSubmit}
        // eslint-disable-next-line react-native/no-inline-styles
        buttonStyle={[styles.submitButton, { backgroundColor: '#F35214' }]}
        titleStyle={styles.buttonTitle}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  titleContainer: {
    backgroundColor: '#F35214',
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    height: 2,
    backgroundColor: '#3F51B5',
    marginBottom: 10,
  },
  questionContainer: {
    marginBottom: 15,
  },
  questionText: {
    color: 'black',
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',  // Centrer horizontalement
    alignItems: 'center',      // Centrer verticalement
  },
  checkboxText: {
    marginLeft: 8,
  },
  submitButton: {
    marginVertical: 20,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 18,
  },
});

export default FicheEnfant;
