'use client';

import React, { HTMLInputTypeAttribute } from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';
import { z } from 'zod';

interface CustomInputProps {
  control: Control<z.infer<typeof authFormSchema>>;
  name: FieldPath<z.infer<typeof authFormSchema>>;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

const CustomInput = ({name, label, control, placeholder, type = 'text'}: CustomInputProps) => { 
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className='form-label'>{label}</FormLabel>
          <div className='flex w-full flex-col'>
            <FormControl>
              <Input placeholder={placeholder} {...field} type={type} className='input-class' />
            </FormControl>
            <FormMessage className='form-message mt-2'/>
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput