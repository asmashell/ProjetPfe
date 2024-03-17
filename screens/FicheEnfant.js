/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Picker } from '@react-native-picker/picker';
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

const EducationLevelPicker = ({ selectedLevel, handleLevelChange }) => {
  const [sortedLevels, setSortedLevels] = useState([
    'أمّيّة', 'ابتدائي', 'تعليم أساسي', 'ثانوي', 'جامعي'
  ]);

  const handleLevelChangeInternal = (itemValue) => {
    handleLevelChange(itemValue);
    const updatedSortedLevels = [
      itemValue,
      ...sortedLevels.filter(level => level !== itemValue)
    ];
    setSortedLevels(updatedSortedLevels);
  };

  return (
    <View style={styles.innercontainer}>
      <View style={styles.dropdownContainer}>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedLevel}
          onValueChange={handleLevelChangeInternal}
          mode="dropdown"
        >
          {sortedLevels.map((level, index) => (
            <Picker.Item key={index} label={level} value={level} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const OccupationPicker = ({ selectedOccupation, handleOccupationChange }) => {
  const [sortedOccupations, setSortedOccupations] = useState([
    'قطاع الصحة', ' قطاع التعليم', ' الهندسة', ' مجال التكنولوجيا', ' مجال الفنون والثقافة', ' مجال الأعمال والتسويق', ' مجال الزراعة', ' مجال الإعلام والاتصالات', 'مهنة أخرى'
  ]);

  const handleOccupationChangeInternal = (itemValue) => {
    handleOccupationChange(itemValue);
    const updatedOccupations = [
      itemValue,
      ...sortedOccupations.filter(occupation => occupation !== itemValue)
    ];
    setSortedOccupations(updatedOccupations);
  };

  return (
    <View style={styles.innercontainer}>
      <View style={styles.dropdownContainer}>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedOccupation}
          onValueChange={handleOccupationChangeInternal}
          mode="dropdown"
        >
          {sortedOccupations.map((occupation, index) => (
            <Picker.Item key={index} label={occupation} value={occupation} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const EducationLevelPicker1= ({ selectedLevel, handleLevelChange }) => {
  const [sortedLevels, setSortedLevels] = useState([
    'أمّيّ', 'ابتدائي', 'تعليم أساسي', 'ثانوي', 'جامعي'
  ]);

  const handleLevelChangeInternal = (itemValue) => {
    handleLevelChange(itemValue);
    const updatedSortedLevels = [
      itemValue,
      ...sortedLevels.filter(level => level !== itemValue)
    ];
    setSortedLevels(updatedSortedLevels);
  };

  return (
    <View style={styles.innercontainer}>
      <View style={styles.dropdownContainer}>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedLevel}
          onValueChange={handleLevelChangeInternal}
          mode="dropdown"
        >
          {sortedLevels.map((level, index) => (
            <Picker.Item key={index} label={level} value={level} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const SchoolLevelPicker = ({ selectedLevel, handleLevelChange }) => {
  const [additionalLevels, setAdditionalLevels] = useState([
    'سنة أولى ابتدائي',
    'سنة ثانية ابتدائي',
    'سنة ثالثة ابتدائي',
    'سنة رابعة ابتدائي',
    'سنة خامسة ابتدائي',
    'سنة سادسة ابتدائي',
  ]);

  const handleLevelChangeInternal = (itemValue) => {
    handleLevelChange(itemValue);
  };

  return (
    <View style={styles.innercontainer}>
      <View style={styles.dropdownContainer}>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedLevel}
          onValueChange={handleLevelChangeInternal}
          mode="dropdown"
        >
          {additionalLevels.map((level, index) => (
            <Picker.Item key={index} label={level} value={level} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const SchoolLevelPicker1 = ({ selectedLevel1, handleLevelChange1 }) => {
  const [schoolLevels, setSchoolLevels] = useState([
    'سنة أولى ابتدائي',
    'سنة ثانية ابتدائي',
    'سنة ثالثة ابتدائي',
    'سنة رابعة ابتدائي',
    'سنة خامسة ابتدائي',
    'سنة سادسة ابتدائي'
  ]);

  const handleLevelChangeInternal1 = (itemValue) => {
    handleLevelChange1(itemValue);
  };

  return (
    <View style={styles.innercontainer}>
      <View style={styles.dropdownContainer}>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedLevel1}
          onValueChange={handleLevelChangeInternal1}
          mode="dropdown"
        >
          {schoolLevels.map((level, index) => (
            <Picker.Item key={index} label={level} value={level} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const NumberDropdownPicker = ({ selectedNumber, handleNumberChange }) => {
  const numberOptions = ['1', '2', '3', '4', '5', 'أكثر'];

  const handleNumberChangeInternal = (itemValue) => {
    handleNumberChange(itemValue);
  };

  return (
    <View style={styles.innercontainer}>
      <View style={styles.dropdownContainer}>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedNumber}
          onValueChange={handleNumberChangeInternal}
          mode="dropdown"
        >
          {numberOptions.map((number, index) => (
            <Picker.Item key={index} label={number} value={number} />
          ))}
        </Picker>
      </View>
    </View>
  );
};
const AgeOfDiscoveryPicker = ({ selectedAge, handleAgeChange }) => {
  const ageOptions = ['6 سنوات', '7 سنوات', '8 سنوات', '9 سنوات', '10 سنوات', '11 سنة', '12 سنة'];

  return (
    <View style={styles.innercontainer}>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedAge}
          onValueChange={handleAgeChange}
          mode="dropdown"
          style={styles.dropdown}
        >
          {ageOptions.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>
      </View>
    </View>
  );
};
const LearningDisabilityTypePicker = ({ selectedType, handleTypeChange }) => {
  const handleTypeChangeInternal = (itemValue) => {
    handleTypeChange(itemValue);
  };

  return (
    <View style={styles.innercontainer}>
      <View style={styles.dropdownContainer}>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedType}
          onValueChange={handleTypeChangeInternal}
          mode="dropdown"
        >
          <Picker.Item label="عسر القراءة" value="عسر القراءة" />
          <Picker.Item label="عسر الكتابة" value="عسر الكتابة" />
          <Picker.Item label="عسر الحساب" value="عسر الحساب" />
        </Picker>
      </View>
    </View>
  );
};
const BirthIssuesPicker = ({ selectedIssue, handleIssueChange }) => {
  const issueOptions = [
    'ضعف في التنفس عند الولادة',
    'نقص الأكسجين في الدماغ',
    'نوبات حمى عند الولادة',
    'مشاكل أخرى',
  ];

  const handleIssueChangeInternal = (itemValue) => {
    handleIssueChange(itemValue);
  };

  return (
    <View style={styles.innercontainer}>
      <View style={styles.dropdownContainer}>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedIssue}
          onValueChange={handleIssueChangeInternal}
          mode="dropdown"
        >
          {issueOptions.map((issue, index) => (
            <Picker.Item key={index} label={issue} value={issue} />
          ))}
        </Picker>
      </View>
    </View>
  );
};
const RelationDegreePicker = ({ selectedDegree, handleDegreeChange }) => {
  const degreeOptions = ['درجة 1', 'درجة 2', 'درجة 3'];

  const handleDegreeChangeInternal = (itemValue) => {
    handleDegreeChange(itemValue);
  };

  return (
    <View style={styles.innercontainer}>
      <View style={styles.dropdownContainer}>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedDegree}
          onValueChange={handleDegreeChangeInternal}
          mode="dropdown"
        >
          {degreeOptions.map((degree, index) => (
            <Picker.Item key={index} label={degree} value={degree} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const FicheEnfant = () => {
  const [selectedMotherLevel, setSelectedMotherLevel] = useState(null);
  const [selectedFatherLevel, setSelectedFatherLevel] = useState(null);
  const [selectedMotherOccupation, setSelectedMotherOccupation] = useState(null);
  const [selectedFatherOccupation, setSelectedFatherOccupation] = useState(null);
  const [selectedSchoolLevel, setSelectedSchoolLevel] = useState(null);
  const [selectedSchoolLevel1, setSelectedSchoolLevel1] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null); // Nouvelle state pour le nombre
  const [selectedAge, setselectedAge] = useState(null); // Nouvelle state pour le nombre
  const [selectedType, setSelectedType] = useState(null);
  const [selectedIssue, setSeledIssue] = useState(null);
  const [selectedDegree, setSelectedDegree] = useState(null);

  const handleMotherLevelChange = (itemValue) => {
    setSelectedMotherLevel(itemValue);
  };

  const handleFatherLevelChange = (itemValue) => {
    setSelectedFatherLevel(itemValue);
  };

  const handleMotherOccupationChange = (itemValue) => {
    setSelectedMotherOccupation(itemValue);
  };

  const handleFatherOccupationChange = (itemValue) => {
    setSelectedFatherOccupation(itemValue);
  };

  const handleSchoolLevelChange = (itemValue) => {
    setSelectedSchoolLevel(itemValue);
  };

  const handleSchoolLevelChange1 = (itemValue) => {
    setSelectedSchoolLevel1(itemValue);
  };

  const handleNumberChange = (itemValue) => {
    setSelectedNumber(itemValue);
  };
  const handleAgeOfDiscoveryChange = (itemValue) => {
    setselectedAge(itemValue);
  };
  const handleTypeChange = (itemValue) => {
    setSelectedType(itemValue);
  };
 const handleIssueChange = (itemValue) => {
  setSeledIssue(itemValue);
};
const handleDegreeChange = (degree) => {
    setSelectedDegree(degree);
  };
  const questions = [
    {
      id: 1,
      text: [
        'رقم ملف الكشف: ',
        'رقم ملف التشخيص:',
        'اسم ولقب الأم: ',
        {
          question: 'المستوى التعليمي للأم:',
          component: <EducationLevelPicker selectedLevel={selectedMotherLevel} handleLevelChange={handleMotherLevelChange} />,
        },
        {
          question: 'مهنة الأم:',
          component: <OccupationPicker selectedOccupation={selectedMotherOccupation} handleOccupationChange={handleMotherOccupationChange} />,
        },
          'اسم ولقب الأب:',
        {
          question: 'المستوى التعليمي للأب:',
          component: <EducationLevelPicker1 selectedLevel={selectedFatherLevel} handleLevelChange={handleFatherLevelChange} />,
        },
        {
          question: 'مهنة الأب: ',
          component: <OccupationPicker selectedOccupation={selectedFatherOccupation} handleOccupationChange={handleFatherOccupationChange} />,
        },
        'الهاتف: ',
        'اسم ولقب الطفل: ',
        'تاريخ ميلاد الطفل: ',
        'الرتبة في العائلة: ',
        'عدد الإخوة والأخوات:',
      ],
    },
    {
      id: 3,
      text: [
        { question: ' وجود مرض عائلي: ', isSpecific: true },
        { question: ' وجود مرض الصرع في العائلة:', isSpecific: true },
        { question: ' الحمل متابع بشكل جيد: ', isSpecific: true },
        { question: 'مبكر:', isSpecific: true },
        'المدة :',
        {
         question: 'مشاكل حديثي الولادة:',
         component: <BirthIssuesPicker selectedIssue={selectedIssue} handleIssueChange={handleIssueChange} />
        },       
        { question: 'القرابة: ', isSpecific: true },
        { question: ' نوبات حمى عند الولادة: ', isSpecific: true },
        { question: 'ضعف ادراكي:', isSpecific: true },
        { question: 'اضطرابات سلوكية: ', isSpecific: true },
        { question: 'تأخر في النطق: ', isSpecific: true },
        {
          question: 'المستوى الدراسي:',
          component: <SchoolLevelPicker selectedLevel={selectedSchoolLevel} handleLevelChange={handleSchoolLevelChange} />,
        },
        'المعدل: ',
        { question: ' رسوب في الصف: ', isSpecific: true },
        'إذا كان نعم، عدد المرات :',
        {
          question: 'المستويات:',
          component: <SchoolLevelPicker1 selectedLevel1={selectedSchoolLevel1} handleLevelChange1={handleSchoolLevelChange1} />,
        },
      ],
    },
    {
      id: 4,
      text: [
        { question: 'وجود اضطرابات تعلم عند الأشقاء: ', isSpecific: true },
        { question: 'وجود اضطرابات تعلم في العائلة: ', isSpecific: true },
        {
          question: 'إذا كانت الإجابة نعم ، درجة العلاقة:',
          component: <RelationDegreePicker selectedDegree={selectedDegree} handleDegreeChange={handleDegreeChange} />,
        },
        { question: 'العدد:',
          component:<NumberDropdownPicker selectedNumber={selectedNumber} handleNumberChange={handleNumberChange} />
      },
      {
        question : 'عمر اكتشاف اضطراب التعلم :' ,
      component:<AgeOfDiscoveryPicker selectedAge={selectedAge} handleAgeChange={handleAgeOfDiscoveryChange}/>
      }  ,
      {
       question: 'نوع اضطراب التعلم:',
       component: <LearningDisabilityTypePicker selectedType={selectedType} handleTypeChange={handleTypeChange} />,
       },
      { question: 'اضطرابات الذاكرة: ', isSpecific: true },
      { question: 'اضطرابات النوم: ', isSpecific: true },
      'إذا كانت الإجابة نعم ، نوع الاضطرابات:',
      'حالة المريض:',
      { question: ' متعاون:', isSpecific: true },
      { question: 'مضطرب: ', isSpecific: true },
      { question: 'نقص في الحركة: ', isSpecific: true },
      { question: 'اضطرابات في المشي: ', isSpecific: true },
      { question: 'اضطرابات حسية: ', isSpecific: true },
      'اضطرابات أخرى:',
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
// Définir l'état pour stocker les réponses de l'utilisateur
const [answers, setAnswers] = useState({});

// Mettre à jour l'état lorsque l'utilisateur sélectionne une réponse
const handleAnswer1 = (answer, index) => {
  setAnswers(prevAnswers => ({
    ...prevAnswers,
    [index]: answer
  }));
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
      {question === 'حالة المريض:' ? 
        <Text style={{fontWeight: 'bold', fontSize:16}}>{question}</Text> 
        : question.question ? question.question : question
      }
    </Text>
    {question === 'حالة المريض:' ? null : question.component ? (
      question.component
                ) : question.isSpecific ? (
                  <View style={styles.answerContainer}>
                   <TouchableOpacity
  style={[
    styles.answerButton,
    answers[index] === 'نعم' ? styles.selectedButton : null,
  ]}
  onPress={() => handleAnswer1('نعم', index)}
>
  <Text style={styles.answerButtonText}>نعم</Text>
</TouchableOpacity>
<TouchableOpacity
  style={[
    styles.answerButton,
    answers[index] === 'لا' ? styles.selectedButton : null,
  ]}
  onPress={() => handleAnswer1('لا', index)}
>
  <Text style={styles.answerButtonText}>لا</Text>
</TouchableOpacity>
                   
                  </View>
                ) : (
                  <TextInput
                    style={styles.answerInput}
                    placeholder="............"
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
          <View style={styles.container}>
  <Text style={styles.pageNumber}>
    {`${currentQuestion + 1}/${questions.length}`}
  </Text>
</View>
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
    paddingTop: 14,
  },
  questionFrame: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 48,
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
    fontSize: 14,
    textAlign: 'right',
    color: '#000000',
  },
  answerInput: {
    height: 34,
    borderColor: '#000000',
    borderWidth: 1,
    marginLeft: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    textAlign: 'right',
    marginBottom: 5,
  },
  answerContainer: {
    flexDirection: 'row-reverse',
  },
  answerButton: {
    borderColor: '#000000',
    paddingVertical: 1,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginBottom: 4,
    marginLeft: 10,
  },
  selectedButton: {
    backgroundColor: '#FBBDE8',
  },
  answerButtonText: {
    color: '#000000',
    fontSize: 15,
  },
  nextButton: {
    backgroundColor: '#EE75CD',
    paddingVertical: 6,
    paddingHorizontal: 100,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  innercontainer: {
    width: 120,
    height: 34, // Ajoutez cette ligne
    marginTop: 8,
    position: 'relative',
  },
  dropdownContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    top: '20',
  },
  dropdown: {
    height: 33,
    width: '110%',
    top:-10,
  },
  container1: {
    flex: 1,
    position: 'relative', // Le conteneur est positionné de manière relative
  },
  pageNumber: {
    position: 'absolute',
    right: 10,
    bottom:5,
    color:'#000000'
  }
});

export default FicheEnfant;
