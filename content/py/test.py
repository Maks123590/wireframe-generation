import os
import sys
import datetime

from openai import OpenAI

api_key = '<your key>'


with open(os.path.join(os.path.dirname(sys.argv[0]), 'input_prompt.txt'), 'r') as file:
    prompt_text = file.read()


client = OpenAI(api_key=api_key)

model_name = "gpt-3.5-turbo-1106"

response = client.chat.completions.create(
  model=model_name,
  messages=[
    {"role": "system", "content": prompt_text}
  ],
    max_tokens=4096,
    temperature=1
)

generated_text = response.choices[0].message.content

timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")

file_name = f"outputs/{model_name}_output_result_{timestamp}.json"

with open(os.path.join(os.path.dirname(sys.argv[0]), file_name), 'x') as output_file:
    output_file.write(generated_text)

print("Output saved to {file_name}")