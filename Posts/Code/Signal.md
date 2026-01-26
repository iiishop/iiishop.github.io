---
title: Signal
date: 2023-12-13 01:34:49
tags:
- Design_Pattern
- Csharp
- Unity
- 笔记
categories:
- EnglishBlog
- Design Pattern
pre: 
img: 
---
# Introduce
This design pattern is designed for sending signals between objects. 
<!--more-->

```Cs
public class Signal
{
    /***
     * This class is used to send signals between objects.
     * 使用方法：
     * 1.在需要发送信号的对象中，创建一个Signal对象，例如： public static Signal signal = new Signal();
     * 2.在需要接收信号的对象中，调用Signal的AddListener方法，例如： signal.AddListener(OnSignal);
     * 3.在需要接收信号的对象中，实现OnSignal方法，例如： void OnSignal(params object[] args) { }
     * 4.在需要发送信号的对象中，调用Signal的Call方法，例如： signal.Call(args);
     */
    public delegate void SignalHandler(params object[] args);
    public event SignalHandler OnSignal;
    private readonly object lockObj = new object();
    public void Call(params object[] args)
    {
        //OnSignal?.Invoke(info);
        SignalHandler handler;
        lock (lockObj)
        {
            handler = OnSignal;
        }
        if (handler != null)
        {
            foreach (var singleCast in handler.GetInvocationList())
            {
                try
                {
                    ((SignalHandler)singleCast)(args)
                }
                catch (Exception ex)
                {
                    Console.Writeline(ex)
                }
            }
        }
    }
    public void AddListener(SignalHandler handler)
    {
        lock (lockObj)
        {
            //保证唯一性
            OnSignal -= handler;
            OnSignal += handler;
        }
    }

    public void RemoveListener(SignalHandler handler)
    {
        lock (lockObj)
        {
            OnSignal -= handler;
        }
    }
}
```