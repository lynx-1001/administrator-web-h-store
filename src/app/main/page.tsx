"use client"
import React, { useState } from 'react'
import Button from '@/core/components/common/button/Button'
import CheckboxButton from '@/core/components/common/button/CheckboxButton'
import RadioButton from '@/core/components/common/button/RadioButton';
import InputField from '@/core/components/common/input/InputField';
import FileInput from '@/core/components/common/input/FileInput';
import RadioSm from '@/core/components/common/button/RadioSm';
import TextArea from '@/core/components/common/input/TextArea';
import DatePicker from '@/core/components/common/date/date-picker';

function page() {
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("option2");
  const [message, setMessage] = useState("");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div>
      page
      <Button variant='outline'>button123</Button>
      <Button size='sm' disabled={true} className='bg-black' >button123</Button>
      <CheckboxButton checked={isCheckedTwo} onChange={setIsCheckedTwo} />
      <div className="flex flex-wrap items-center gap-8">
        <RadioButton
          id="radio1"
          name="group1"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleRadioChange}
          label="Default"
        />
        <RadioButton
          id="radio2"
          name="group1"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleRadioChange}
          label="Selected"
        />
        <RadioButton
          id="radio3"
          name="group1"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleRadioChange}
          label="Disabled"
          disabled={true}
        />
      </div>

      <InputField/>
      <FileInput/>
      <TextArea 
      value={message}
      onChange={(value) => setMessage(value)}
      hint="Please enter a valid message."
      rows={2}
      />

              <div>
          <DatePicker
            id="date-picker"
            label="Date Picker Input"
            placeholder="Select a date"
            onChange={(dates, currentDateString) => {
              // Handle your logic
              console.log({ dates, currentDateString });
            }}
          />
        </div>
    </div>
  )
}
export default page